---
name: 3s-decomp
slug: 3s-decomp-trafgals
summary: 'Decompilation of Street Fighter III: 3rd Strike for PlayStation 2'
categories:
  - preservation
  - development
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: AGPL-3.0
homepage: null
source:
  provider: github
  repository: trafgals/3s-decomp
  repositoryId: '1426582173'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-11-11T04:35:22Z'
latestRelease:
  tag: web-data-1
  name: The disc image for the web build
  publishedAt: '2026-10-22T04:36:17Z'
  url: 'https://github.com/trafgals/3s-decomp/releases/tag/web-data-1'
activity:
  lastSynchronized: '2026-11-11T06:20:58.589Z'
automation:
  sync: true
  github:
    repoEtag: W/"e4388bd197f6fe5b4bb72b3af08ab71f97a5b7526c33271a6a949b612fc27838"
    releasesEtag: W/"ddbbd8bc371b522412ba6dd194da6d7070a81d6d48dc1989e5708e8b6e96db84"
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: crowded-street/3s-decomp'
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: crowded-street/3s-decomp
  source: crowded-street/3s-decomp
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
