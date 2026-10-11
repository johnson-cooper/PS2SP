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
  lastCommit: '2026-10-09T00:39:04Z'
latestRelease:
  tag: 2.9.4-build.45
  name: Alpha 2.9.4-build.45
  publishedAt: '2026-10-09T00:39:13Z'
  url: 'https://github.com/XDaoFangxiX/ARMSX2-Alpha/releases/tag/2.9.4-build.45'
activity:
  lastSynchronized: '2026-10-11T15:41:23.732Z'
automation:
  sync: true
  github:
    repoEtag: W/"3540681b099cdf65447af5e5b2b863399f1bd55a66e0c4996b5f6f388116a459"
    releasesEtag: W/"5d4e52cc47db442903d4c2400aeeb5bd7d9965b85f20c8a5af508a0e16e93a7d"
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
