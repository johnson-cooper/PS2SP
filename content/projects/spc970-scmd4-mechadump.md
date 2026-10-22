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
  lastSynchronized: '2026-10-22T10:12:53.317Z'
automation:
  sync: true
  github:
    repoEtag: W/"359be863014e1643e5322349653420f9b6de931d03e382a3236d09c0072fe242"
    releasesEtag: W/"0ce6d07217736dd1a7f2c6dfb4527abb11569cb48c5dfe732a50bb62b450de3f"
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
