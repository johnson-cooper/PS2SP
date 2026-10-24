---
name: fallout2-ce-ps2
slug: fallout2-ce-ps2
summary: port de fallout 2 a ps2
categories:
  - ports
tags:
  - auto-discovered
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: Nicolasalucin/fallout2-ce-ps2
  repositoryId: '1425859615'
repository:
  archived: false
  defaultBranch: ps2
  stars: 2
  forks: 0
  lastCommit: '2026-10-22T16:48:04Z'
latestRelease:
  tag: v1.0.2-ps2
  name: Fallout 2 CE PS2 - v1.0.2 (Hardware Boot Hardening)
  publishedAt: '2026-10-22T05:59:28Z'
  url: 'https://github.com/Nicolasalucin/fallout2-ce-ps2/releases/tag/v1.0.2-ps2'
activity:
  lastSynchronized: '2026-10-24T11:00:21.792Z'
automation:
  sync: true
  github:
    repoEtag: W/"3cee73cdb7feae187024ec71828cb7b8df995c4a80cb5c6f42d0e97ec781a030"
    releasesEtag: W/"8d3753fb17fab966b0a36ef9f178f77a8b369078945e8b493b67ea6258adcaac"
discovery:
  method: 'incremental:"ps2 port" in:name,description,readme'
  confidence: 100
  evidence:
    - ps2-homebrew topic
    - PS2-specific topic
    - repository name explicitly identifies PS2
    - repository description explicitly identifies PS2
    - published GitHub release present
    - release metadata identifies PS2
  maturity: prerelease-only
verified: false
featured: false
hidden: false
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
