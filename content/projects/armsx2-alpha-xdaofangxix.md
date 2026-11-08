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
  stars: 10
  forks: 0
  lastCommit: '2026-10-19T08:46:46Z'
latestRelease:
  tag: 2.9.7-build.48
  name: Alpha 2.9.7-build.48
  publishedAt: '2026-10-19T08:46:57Z'
  url: 'https://github.com/XDaoFangxiX/ARMSX2-Alpha/releases/tag/2.9.7-build.48'
activity:
  lastSynchronized: '2026-11-08T15:13:01.003Z'
automation:
  sync: true
  github:
    repoEtag: W/"c6917d0ede0ef2fc73dbeece286a52af139ccf11bb66e0d91c6d1f7a30dd3518"
    releasesEtag: W/"f7eeb34c37a7bd5dacd167d9c89cb69abd78380a2247b6e782fcf01c48d24f6f"
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
