---
name: ARMSX2
slug: armsx2-lim2222
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
  repository: lim2222/ARMSX2
  repositoryId: '1420344860'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-10-15T07:51:04Z'
latestRelease:
  tag: TaikoV1.0
  name: ARMSX2 Taiko 2.8.3+taiko1.0
  publishedAt: '2026-10-15T07:51:04Z'
  url: 'https://github.com/lim2222/ARMSX2/releases/tag/TaikoV1.0'
activity:
  lastSynchronized: '2026-11-21T23:16:14.148Z'
automation:
  sync: true
  github:
    repoEtag: W/"e56786b2f3fe594ee51efd04ca27e69235d08b035496ec2262657feb8dd08edb"
    releasesEtag: W/"a01e09f76b6463f6df7bc34a906e9d9abd09f6e2f2b9052847f4d44190b554b2"
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
