# Root files
New-Item -Path "_config.yml" -ItemType File
New-Item -Path "about.md" -ItemType File
New-Item -Path "index.md" -ItemType File
New-Item -Path "sitemap.xml" -ItemType File
New-Item -Path "robots.txt" -ItemType File
New-Item -Path "README.md" -ItemType File

# _includes folder and files
New-Item -Path "_includes" -ItemType Directory
New-Item -Path "_includes/head.html" -ItemType File
New-Item -Path "_includes/header.html" -ItemType File
New-Item -Path "_includes/footer.html" -ItemType File
New-Item -Path "_includes/disqus.html" -ItemType File
New-Item -Path "_includes/newsletter.html" -ItemType File
New-Item -Path "_includes/social-share.html" -ItemType File

# _layouts folder and files
New-Item -Path "_layouts" -ItemType Directory
New-Item -Path "_layouts/default.html" -ItemType File
New-Item -Path "_layouts/post.html" -ItemType File
New-Item -Path "_layouts/page.html" -ItemType File

# _posts folder and files
New-Item -Path "_posts" -ItemType Directory
New-Item -Path "_posts/2023-11-20-intro-to-ai.md" -ItemType File
New-Item -Path "_posts/2023-11-21-ai-agents-explained.md" -ItemType File

# _sass folder and file
New-Item -Path "_sass" -ItemType Directory
New-Item -Path "_sass/main.scss" -ItemType File

# assets folders and files
New-Item -Path "assets" -ItemType Directory
New-Item -Path "assets/css" -ItemType Directory
New-Item -Path "assets/css/main.css" -ItemType File
New-Item -Path "assets/js" -ItemType Directory
New-Item -Path "assets/js/main.js" -ItemType File
New-Item -Path "assets/js/analytics.js" -ItemType File
New-Item -Path "assets/images" -ItemType Directory
