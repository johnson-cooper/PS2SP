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
  lastSynchronized: '2026-11-02T15:52:30.878Z'
automation:
  sync: true
  github:
    repoEtag: W/"25a6d7dca1db28c5862978106ec2510819f349a6a8e921c49fd75fa58cf67782"
    releasesEtag: W/"f4e134ee24d857fbca8f6cfd62bd70d8aed1ceefcb9e2e34bc179731103b664c"
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
