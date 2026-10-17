---
name: ARMSX2-Alpha
slug: armsx2-alpha-xdaofangxix
summary: ARMSX2 - The Playstation 2 Emulator for ARM64 Platforms
categories:
  - emulators
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'https://armsx2.net/'
source:
  provider: github
  repository: XDaoFangxiX/ARMSX2-Alpha
  repositoryId: '1327159727'
repository:
  archived: false
  defaultBranch: testing-dev-plus
  stars: 3
  forks: 0
  lastCommit: '2026-10-16T19:59:37Z'
latestRelease:
  tag: 2.9.5-build.46
  name: Alpha 2.9.5-build.46
  publishedAt: '2026-10-16T19:59:46Z'
  url: 'https://github.com/XDaoFangxiX/ARMSX2-Alpha/releases/tag/2.9.5-build.46'
activity:
  lastSynchronized: '2026-10-17T05:49:46.686Z'
automation:
  sync: true
  github:
    repoEtag: W/"33d2427c5f019e73916e8100680762210438809b14249ddff092d661ac141bb9"
    releasesEtag: W/"64763a2cff614f210a618166287b92ddf89f306be4b0ed9babc3340ee05b0ca7"
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 100
  evidence:
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
  forkOf: ARMSX2/ARMSX2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
