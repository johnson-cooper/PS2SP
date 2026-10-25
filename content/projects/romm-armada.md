---
name: romm-armada
slug: romm-armada
summary: >-
  Decky Loader plugin for Arm64 handhelds: download RomM games and sync PS2
  saves, with the experiments behind it
categories:
  - utilities
tags:
  - auto-discovered
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: abduznik/romm-armada
  repositoryId: '1433520951'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-25T18:48:16Z'
latestRelease:
  tag: v0.3.2
  name: RomM Armada 0.3.2
  publishedAt: '2026-10-25T18:48:01Z'
  url: 'https://github.com/abduznik/romm-armada/releases/tag/v0.3.2'
activity:
  lastSynchronized: '2026-10-25T21:14:42.242Z'
automation:
  sync: true
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - PS2-specific topic
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
  maturity: released-active
verified: false
featured: false
hidden: false
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
