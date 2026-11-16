---
name: PS2-vMac
slug: ps2-vmac
summary: A Little Experimental Macintosh Emulator for PS2 (Based on Mini vMac)
categories:
  - emulators
tags:
  - auto-discovered
features: []
authors: []
license: GPL-2.0
homepage: null
source:
  provider: github
  repository: smiluredev/PS2-vMac
  repositoryId: '1460043958'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-11-16T14:18:26Z'
latestRelease:
  tag: v1
  name: Release - 1.0
  publishedAt: '2026-11-16T14:17:30Z'
  url: 'https://github.com/smiluredev/PS2-vMac/releases/tag/v1'
activity:
  lastSynchronized: '2026-11-16T22:31:39.705Z'
automation:
  sync: true
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - ps2-homebrew topic
    - PS2-specific topic
    - repository name explicitly identifies PS2
    - repository description explicitly identifies PS2
    - published GitHub release present
    - release contains a PS2-style ELF asset
  maturity: released-active
verified: false
featured: false
hidden: false
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
