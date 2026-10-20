---
name: XBSX2
slug: xbsx2-xboxemulationhub
summary: XBSX2 UWP/WinRT - The PlayStation 2 Emulator for Xbox Series/Xbox One
categories:
  - emulators
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'https://wiki.sternserv.xyz/docs/emulation/xbsx2-guide'
source:
  provider: github
  repository: XboxEmulationHub/XBSX2
  repositoryId: '1079774068'
repository:
  archived: false
  defaultBranch: master
  stars: 119
  forks: 21
  lastCommit: '2026-10-20T15:04:44Z'
latestRelease:
  tag: v2.0.9.2
  name: v2.0.9.2 Release
  publishedAt: '2026-10-20T15:04:47Z'
  url: 'https://github.com/XboxEmulationHub/XBSX2/releases/tag/v2.0.9.2'
activity:
  lastSynchronized: '2026-10-20T15:22:35.905Z'
automation:
  sync: true
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 100
  evidence:
    - PS2-specific topic
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: PCSX2/pcsx2'
  maturity: released-active
verified: false
featured: false
hidden: false
relationships:
  forkOf: PCSX2/pcsx2
  source: PCSX2/pcsx2
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
