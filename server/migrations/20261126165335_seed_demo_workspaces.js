const demoUsers = [
    {
        user_slug: "demo_ava",
        username: "Ava Morgan",
        email: "ava.morgan@example.test",
        pw_hash: "!seed-only-no-login",
        privileges: "default"
    },
    {
        user_slug: "demo_noah",
        username: "Noah Rivera",
        email: "noah.rivera@example.test",
        pw_hash: "!seed-only-no-login",
        privileges: "default"
    },
    {
        user_slug: "demo_mina",
        username: "Mina Park",
        email: "mina.park@example.test",
        pw_hash: "!seed-only-no-login",
        privileges: "default"
    },
    {
        user_slug: "demo_theo",
        username: "Theo Brooks",
        email: "theo.brooks@example.test",
        pw_hash: "!seed-only-no-login",
        privileges: "default"
    }
];

const demoWorkspaces = [
    {
        user_slug: "demo_ava",
        slug: "daily-command-center",
        title: "Daily Command Center",
        windows: [
            {
                slug: "planning",
                title: "Planning",
                elements: [
                    { link: "https://calendar.google.com", title: "Calendar" },
                    { link: "https://todoist.com", title: "Task list" }
                ]
            },
            {
                slug: "quick-reference",
                title: "Quick Reference",
                elements: [
                    { link: "https://www.wikipedia.org", title: "Wikipedia" },
                    { link: "https://translate.google.com", title: "Translator" }
                ]
            }
        ]
    },
    {
        user_slug: "demo_ava",
        slug: "research-notes",
        title: "Research Notes",
        windows: [
            {
                slug: "papers",
                title: "Papers",
                elements: [
                    { link: "https://scholar.google.com", title: "Google Scholar" },
                    { link: "https://arxiv.org", title: "arXiv" }
                ]
            },
            {
                slug: "writing",
                title: "Writing",
                elements: [
                    { link: "https://docs.google.com", title: "Documents" },
                    { link: "https://www.overleaf.com", title: "Overleaf" }
                ]
            }
        ]
    },
    {
        user_slug: "demo_ava",
        slug: "writing-studio",
        title: "Writing Studio",
        windows: [
            {
                slug: "drafting",
                title: "Drafting",
                elements: [
                    { link: "https://docs.google.com", title: "Drafts" },
                    { link: "https://www.notion.so", title: "Writing notes" }
                ]
            },
            {
                slug: "reference",
                title: "Reference",
                elements: [
                    { link: "https://www.merriam-webster.com", title: "Dictionary" },
                    { link: "https://www.thesaurus.com", title: "Thesaurus" }
                ]
            }
        ]
    },
    {
        user_slug: "demo_ava",
        slug: "learning-queue",
        title: "Learning Queue",
        windows: [
            {
                slug: "courses",
                title: "Courses",
                elements: [
                    { link: "https://www.khanacademy.org", title: "Khan Academy" },
                    { link: "https://www.coursera.org", title: "Coursera" }
                ]
            },
            {
                slug: "practice",
                title: "Practice",
                elements: [
                    { link: "https://leetcode.com", title: "Coding practice" },
                    { link: "https://quizlet.com", title: "Flashcards" }
                ]
            }
        ]
    },
    {
        user_slug: "demo_noah",
        slug: "frontend-workshop",
        title: "Frontend Workshop",
        windows: [
            {
                slug: "documentation",
                title: "Documentation",
                elements: [
                    { link: "https://developer.mozilla.org", title: "MDN" },
                    { link: "https://react.dev", title: "React docs" }
                ]
            },
            {
                slug: "inspiration",
                title: "Inspiration",
                elements: [
                    { link: "https://codepen.io", title: "CodePen" },
                    { link: "https://dribbble.com", title: "Dribbble" }
                ]
            }
        ]
    },
    {
        user_slug: "demo_noah",
        slug: "backend-toolbox",
        title: "Backend Toolbox",
        windows: [
            {
                slug: "api-tools",
                title: "API Tools",
                elements: [
                    { link: "https://www.postman.com", title: "Postman" },
                    { link: "https://httpie.io", title: "HTTPie" }
                ]
            },
            {
                slug: "reference",
                title: "Reference",
                elements: [
                    { link: "https://dev.mysql.com/doc/", title: "MySQL docs" },
                    { link: "https://knexjs.org", title: "Knex docs" }
                ]
            }
        ]
    },
    {
        user_slug: "demo_noah",
        slug: "open-source",
        title: "Open Source",
        windows: [
            {
                slug: "repositories",
                title: "Repositories",
                elements: [
                    { link: "https://github.com", title: "GitHub" },
                    { link: "https://gitlab.com", title: "GitLab" }
                ]
            },
            {
                slug: "community",
                title: "Community",
                elements: [
                    { link: "https://stackoverflow.com", title: "Stack Overflow" },
                    { link: "https://news.ycombinator.com", title: "Hacker News" }
                ]
            }
        ]
    },
    {
        user_slug: "demo_mina",
        slug: "design-board",
        title: "Design Board",
        windows: [
            {
                slug: "design-tools",
                title: "Design Tools",
                elements: [
                    { link: "https://www.figma.com", title: "Figma" },
                    { link: "https://www.canva.com", title: "Canva" }
                ]
            },
            {
                slug: "assets",
                title: "Assets",
                elements: [
                    { link: "https://unsplash.com", title: "Unsplash" },
                    { link: "https://fonts.google.com", title: "Google Fonts" }
                ]
            }
        ]
    },
    {
        user_slug: "demo_mina",
        slug: "reading-shelf",
        title: "Reading Shelf",
        windows: [
            {
                slug: "articles",
                title: "Articles",
                elements: [
                    { link: "https://medium.com", title: "Medium" },
                    { link: "https://www.theguardian.com", title: "The Guardian" }
                ]
            },
            {
                slug: "books",
                title: "Books",
                elements: [
                    { link: "https://openlibrary.org", title: "Open Library" },
                    { link: "https://www.goodreads.com", title: "Goodreads" }
                ]
            }
        ]
    },
    {
        user_slug: "demo_mina",
        slug: "language-practice",
        title: "Language Practice",
        windows: [
            {
                slug: "lessons",
                title: "Lessons",
                elements: [
                    { link: "https://www.duolingo.com", title: "Duolingo" },
                    { link: "https://www.memrise.com", title: "Memrise" }
                ]
            },
            {
                slug: "translation",
                title: "Translation",
                elements: [
                    { link: "https://translate.google.com", title: "Google Translate" },
                    { link: "https://www.deepl.com/translator", title: "DeepL" }
                ]
            }
        ]
    },
    {
        user_slug: "demo_theo",
        slug: "fitness-routine",
        title: "Fitness Routine",
        windows: [
            {
                slug: "workouts",
                title: "Workouts",
                elements: [
                    { link: "https://www.nike.com/training", title: "Nike Training" },
                    { link: "https://www.youtube.com", title: "Workout videos" }
                ]
            },
            {
                slug: "tracking",
                title: "Tracking",
                elements: [
                    { link: "https://www.strava.com", title: "Strava" },
                    { link: "https://www.google.com/fit/", title: "Google Fit" }
                ]
            }
        ]
    },
    {
        user_slug: "demo_theo",
        slug: "home-projects",
        title: "Home Projects",
        windows: [
            {
                slug: "planning",
                title: "Planning",
                elements: [
                    { link: "https://trello.com", title: "Project board" },
                    { link: "https://www.pinterest.com", title: "Ideas" }
                ]
            },
            {
                slug: "how-to",
                title: "How-to",
                elements: [
                    { link: "https://www.wikihow.com", title: "How-to guides" },
                    { link: "https://www.youtube.com", title: "Tutorials" }
                ]
            }
        ]
    },
    {
        user_slug: "demo_theo",
        slug: "weekend-cooking",
        title: "Weekend Cooking",
        windows: [
            {
                slug: "recipes",
                title: "Recipes",
                elements: [
                    { link: "https://www.bbcgoodfood.com", title: "BBC Good Food" },
                    { link: "https://www.allrecipes.com", title: "Allrecipes" }
                ]
            },
            {
                slug: "techniques",
                title: "Techniques",
                elements: [
                    { link: "https://www.seriouseats.com", title: "Serious Eats" },
                    { link: "https://www.kingarthurbaking.com/learn", title: "Baking guides" }
                ]
            }
        ]
    }
];

async function findRequiredId(knex, table, criteria, description) {
    const row = await knex(table).select("id").where(criteria).first();
    if (!row) {
        throw new Error(`Could not find ${description} while seeding demo workspaces`);
    }
    return row.id;
}

exports.up = async function(knex) {
    for (const user of demoUsers) {
        await knex("ci_users").insert(user);
    }

    for (const workspace of demoWorkspaces) {
        const userId = await findRequiredId(
            knex,
            "ci_users",
            { user_slug: workspace.user_slug },
            `user ${workspace.user_slug}`
        );

        await knex("ci_workspaces").insert({
            user_id: userId,
            slug: workspace.slug,
            title: workspace.title,
            status: "public"
        });

        const workspaceId = await findRequiredId(
            knex,
            "ci_workspaces",
            { user_id: userId, slug: workspace.slug },
            `workspace ${workspace.slug}`
        );

        for (const [windowOrder, window] of workspace.windows.entries()) {
            await knex("ci_windows").insert({
                workspace_id: workspaceId,
                slug: window.slug,
                title: window.title,
                sort_order: windowOrder
            });

            const windowId = await findRequiredId(
                knex,
                "ci_windows",
                { workspace_id: workspaceId, slug: window.slug },
                `window ${window.slug}`
            );

            await knex("ci_elements").insert(
                window.elements.map((element, elementOrder) => ({
                    window_id: windowId,
                    link: element.link,
                    title: element.title,
                    img: null,
                    sort_order: elementOrder
                }))
            );
        }
    }
};

exports.down = async function(knex) {
    for (const workspace of [...demoWorkspaces].reverse()) {
        const user = await knex("ci_users")
            .select("id")
            .where({ user_slug: workspace.user_slug })
            .first();
        if (!user) {
            continue;
        }

        await knex("ci_workspaces")
            .where({ user_id: user.id, slug: workspace.slug })
            .del();
    }

    for (const user of demoUsers) {
        const userRow = await knex("ci_users")
            .select("id")
            .where({ user_slug: user.user_slug })
            .first();
        if (!userRow) {
            continue;
        }

        const remainingWorkspace = await knex("ci_workspaces")
            .select("id")
            .where({ user_id: userRow.id })
            .first();
        if (!remainingWorkspace) {
            await knex("ci_users").where({ id: userRow.id }).del();
        }
    }
};
