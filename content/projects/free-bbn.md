---
name: Free-BBN
slug: free-bbn
summary: >-
  An open source reimplementation of the Sony Playstation Broadband Navigator
  for the PS2, built in PS2SDK.
categories:
  - ports
  - sdks
  - development
tags:
  - auto-discovered
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: jegesmedve09/Free-BBN
  repositoryId: '1124927132'
repository:
  archived: false
  defaultBranch: main
  stars: 12
  forks: 0
  lastCommit: '2026-10-04T14:54:28Z'
latestRelease:
  tag: SUFFERING_v0.10
  name: SUFFERING v0.10
  publishedAt: '2026-01-19T19:26:05Z'
  url: 'https://github.com/jegesmedve09/Free-BBN/releases/tag/SUFFERING_v0.10'
activity:
  lastSynchronized: '2026-11-08T15:13:21.538Z'
automation:
  sync: true
  github:
    repoEtag: W/"5222456f005a26b2889dca58b57c94bc5739ac098b50e315a1890735ddcf52a1"
    releasesEtag: W/"7a1b94402b160f35a7ed2b20cdaea8de36082163b0954f6dc62e8655e9506aed"
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - README identifies PS2 homebrew
    - published GitHub release present
    - release contains a PS2-style ELF asset
  maturity: prerelease-only
verified: false
featured: false
hidden: false
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
