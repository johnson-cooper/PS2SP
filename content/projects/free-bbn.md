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
  lastSynchronized: '2026-11-11T15:12:35.807Z'
automation:
  sync: true
  github:
    repoEtag: W/"7eb9ce6152a236257f75a29517d23e6cd4534bc7b6db25e92502baf8acea45f7"
    releasesEtag: W/"70cb8af0e70cac5c4a8d013ca31588825979e8c1b41e2786c86b4edecab19fbf"
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
