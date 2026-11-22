---
name: ps2streamer
slug: ps2streamer
summary: >-
  A small client-server combo that lets you stream your favorite videos to the
  PS2. Hardware-accelerated.
categories:
  - utilities
tags:
  - auto-discovered
features: []
authors: []
license: MIT
homepage: null
source:
  provider: github
  repository: MrSlopster/ps2streamer
  repositoryId: '1467425321'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-11-22T10:18:25Z'
latestRelease:
  tag: v0.2
  name: 'ps2streamer 0.2: sound, controller seek/pause, cross-platform sender'
  publishedAt: '2026-11-22T10:19:04Z'
  url: 'https://github.com/MrSlopster/ps2streamer/releases/tag/v0.2'
activity:
  lastSynchronized: '2026-11-22T10:19:08.990Z'
automation:
  sync: true
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - release contains a PS2-style ELF asset
  maturity: released-active
verified: false
featured: false
hidden: false
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
