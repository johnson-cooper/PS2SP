---
name: spc970-scmd4-mechadump
slug: spc970-scmd4-mechadump
summary: Tool to dump SPC970-based PS2 Mechacons using S-command 0x04 bug
categories:
  - hardware
tags:
  - auto-discovered
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: Myriachan/spc970-scmd4-mechadump
  repositoryId: '1403745999'
repository:
  archived: false
  defaultBranch: main
  stars: 3
  forks: 0
  lastCommit: '2026-10-19T05:10:00Z'
latestRelease:
  tag: '1.1'
  name: Initial public release
  publishedAt: '2026-10-07T03:55:04Z'
  url: 'https://github.com/Myriachan/spc970-scmd4-mechadump/releases/tag/1.1'
activity:
  lastSynchronized: '2026-11-14T10:36:36.671Z'
automation:
  sync: true
  github:
    repoEtag: W/"8c91a2c9d852084489a08f2c95419d6d7fe302334df838bf5c9d5878f5b7bbf8"
    releasesEtag: W/"77a0c6807734baf3e3e6c1a54d8a39e4b2e56cd2ee705f75ab44a321bbe1c93e"
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README identifies PS2 homebrew
    - published GitHub release present
  maturity: released-active
verified: false
featured: false
hidden: false
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
