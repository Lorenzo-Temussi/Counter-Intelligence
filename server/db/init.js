// server/db/init.js
require("dotenv").config();
const mysql = require("mysql2/promise");

async function main() {
    const db = await mysql.createConnection({
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || 3306),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });

    try {
        await db.execute(`
             CREATE TABLE IF NOT EXISTS ci_users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                user_slug VARCHAR(100) NOT NULL UNIQUE,
                username VARCHAR(120) NOT NULL,
                email VARCHAR(254) NOT NULL UNIQUE,
                pw_hash VARCHAR(200) NOT NULL,
                privileges ENUM('default', 'admin', 'aizen') NOT NULL DEFAULT 'default'
            )
        `)
        await db.execute(`
            CREATE TABLE IF NOT EXISTS ci_workspaces (
                id INT AUTO_INCREMENT PRIMARY KEY,
                slug VARCHAR(100) NOT NULL,
                title VARCHAR(200) NOT NULL,
                user_id INT NOT NULL,
                status ENUM('public', 'private') NOT NULL DEFAULT 'private',
                CONSTRAINT uq_ci_workspaces_user_slug
                    UNIQUE (user_id, slug),
                CONSTRAINT fk_ci_workspaces_user
                    FOREIGN KEY (user_id) REFERENCES ci_users(id)
                    ON DELETE CASCADE
            )
        `)
        await db.execute(`   
            CREATE TABLE IF NOT EXISTS ci_windows (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(120) NOT NULL,
                slug VARCHAR(100) NOT NULL,
                sort_order INT NOT NULL,
                workspace_id INT NOT NULL,
                CONSTRAINT uq_ci_windows_workspace_order
                    UNIQUE (workspace_id, sort_order),
                CONSTRAINT uq_ci_windows_workspace_slug
                    UNIQUE (workspace_id, slug),
                CONSTRAINT fk_ci_windows_workspace
                    FOREIGN KEY (workspace_id) REFERENCES ci_workspaces(id)
                    ON DELETE CASCADE
            )
        `)
        await db.execute(`
            CREATE TABLE IF NOT EXISTS ci_elements (
                id INT AUTO_INCREMENT PRIMARY KEY,
                window_id INT NOT NULL,
                link VARCHAR(200) NOT NULL,
                title VARCHAR(120),
                img VARCHAR(200),
                sort_order INT NOT NULL,
                CONSTRAINT uq_ci_elements_window_order
                    UNIQUE (window_id, sort_order),
                CONSTRAINT fk_ci_elements_window
                    FOREIGN KEY (window_id) REFERENCES ci_windows(id)
                    ON DELETE CASCADE
            )    
        `);

        const init_users = [
            {
                user_slug: "john_user",
                username: "John_User",
                email: "john_user@example.test",
                pw_hash: "PasswordHashed",
                privileges: "default"
            }
        ];

        const init_workspaces = [
            {
                user_slug: "john_user",
                slug: "my_workspace",
                title: "My_Workspace",
                status: "public"
            }
        ];

        const init_windows = [
            {
                user_slug: "john_user",
                workspace_slug: "my_workspace",
                title: "Googles",
                slug: "googles",
                sort_order: 0
            }
        ];

        const init_elements = [
            {
                user_slug: "john_user",
                workspace_slug: "my_workspace",
                window_slug: "googles",
                link: "https://www.google.com",
                title: "Google",
                img: null,
                sort_order: 0
            }
        ];

        for (const user of init_users) {
            await db.execute(
                `INSERT INTO ci_users (user_slug, username, email, pw_hash, privileges)
                 VALUES (?, ?, ?, ?, ?)
                 ON DUPLICATE KEY UPDATE
                    username = VALUES(username),
                    email = VALUES(email),
                    pw_hash = VALUES(pw_hash),
                    privileges = VALUES(privileges)`,
                [user.user_slug, user.username, user.email, user.pw_hash, user.privileges]
            );
        }

        async function getRequiredId(query, values, description) {
            const [rows] = await db.execute(query, values);
            if (rows.length === 0) {
                throw new Error(`Could not find ${description} while seeding`);
            }
            return rows[0].id;
        }

        for (const workspace of init_workspaces) {
            const userId = await getRequiredId(
                "SELECT id FROM ci_users WHERE user_slug = ?",
                [workspace.user_slug],
                `user ${workspace.user_slug}`
            );

            await db.execute(
                `INSERT INTO ci_workspaces (slug, title, user_id, status)
                 VALUES (?, ?, ?, ?)
                 ON DUPLICATE KEY UPDATE
                    title = VALUES(title),
                    status = VALUES(status)
                    `,
                [workspace.slug, workspace.title, userId, workspace.status]
            );
        }

        for (const window of init_windows) {
            const userId = await getRequiredId(
                "SELECT id FROM ci_users WHERE user_slug = ?",
                [window.user_slug],
                `user ${window.user_slug}`
            );
            const workspaceId = await getRequiredId(
                "SELECT id FROM ci_workspaces WHERE user_id = ? AND slug = ?",
                [userId, window.workspace_slug],
                `workspace ${window.workspace_slug}`
            );

            await db.execute(
                `INSERT INTO ci_windows (title, slug, sort_order, workspace_id)
                 VALUES (?, ?, ?, ?)
                 ON DUPLICATE KEY UPDATE
                    title = VALUES(title),
                    sort_order = VALUES(sort_order)`,
                [window.title, window.slug, window.sort_order, workspaceId]
            );
        }

        for (const element of init_elements) {
            const userId = await getRequiredId(
                "SELECT id FROM ci_users WHERE user_slug = ?",
                [element.user_slug],
                `user ${element.user_slug}`
            );
            const workspaceId = await getRequiredId(
                "SELECT id FROM ci_workspaces WHERE user_id = ? AND slug = ?",
                [userId, element.workspace_slug],
                `workspace ${element.workspace_slug}`
            );
            const windowId = await getRequiredId(
                "SELECT id FROM ci_windows WHERE workspace_id = ? AND slug = ?",
                [workspaceId, element.window_slug],
                `window ${element.window_slug}`
            );

            await db.execute(
                `INSERT INTO ci_elements (window_id, link, title, img, sort_order)
                 VALUES (?, ?, ?, ?, ?)
                 ON DUPLICATE KEY UPDATE
                    link = VALUES(link),
                    title = VALUES(title),
                    img = VALUES(img)`,
                [windowId, element.link, element.title, element.img, element.sort_order]
            );
        }

        console.log("Database initialized.");
    } finally {
        await db.end();
    }
}

main().catch(error => {
    console.error("Database initialization failed:", error);
    process.exitCode = 1;
});