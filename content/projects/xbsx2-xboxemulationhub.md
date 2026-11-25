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
  stars: 134
  forks: 24
  lastCommit: '2026-11-01T21:57:20Z'
latestRelease:
  tag: v2.0.9.2
  name: v2.0.9.2 Release
  publishedAt: '2026-10-20T15:04:47Z'
  url: 'https://github.com/XboxEmulationHub/XBSX2/releases/tag/v2.0.9.2'
activity:
  lastSynchronized: '2026-11-25T12:58:52.802Z'
automation:
  sync: true
  github:
    repoEtag: W/"b0774a435b859b16f7f907985c3759646e26309ffb44e8a8326624d58927d62b"
    releasesEtag: W/"ecc0ac8d228d23b9970c1cbae975e9e616b9f092fd0372c9dff68b011bee8098"
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
