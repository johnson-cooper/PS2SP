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
  lastCommit: '2026-10-08T00:22:19Z'
latestRelease:
  tag: 2.9.2-build.41
  name: Alpha 2.9.2-build.41
  publishedAt: '2026-09-30T02:52:47Z'
  url: 'https://github.com/XDaoFangxiX/ARMSX2-Alpha/releases/tag/2.9.2-build.41'
activity:
  lastSynchronized: '2026-10-08T15:37:26.946Z'
automation:
  sync: true
  github:
    repoEtag: W/"ff3e77a716129e3fa41a0f0091b2847812f309459f9c81049cd15a1a730be08f"
    releasesEtag: W/"71331d1130906b66d19e99f52f8ae7b6b185fd4d85e980e9ca1f0049101f8a08"
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
