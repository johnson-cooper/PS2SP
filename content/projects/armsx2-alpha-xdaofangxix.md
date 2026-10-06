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
  stars: 2
  forks: 0
  lastCommit: '2026-10-06T00:10:10Z'
latestRelease:
  tag: 2.9.2-build.41
  name: Alpha 2.9.2-build.41
  publishedAt: '2026-09-30T02:52:47Z'
  url: 'https://github.com/XDaoFangxiX/ARMSX2-Alpha/releases/tag/2.9.2-build.41'
activity:
  lastSynchronized: '2026-10-06T15:12:42.028Z'
automation:
  sync: true
  github:
    repoEtag: W/"a39f032c188f03019a7a5a6104a4a382ea8fbe76c56aeb5e6d080e90340e501e"
    releasesEtag: W/"0d6d06e64b62f075cde30c2519dd367e180ec08ddc75fadee2f28147589c806c"
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
