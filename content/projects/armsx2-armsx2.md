---
name: ARMSX2
slug: armsx2-armsx2
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
  repository: ARMSX2/ARMSX2
  repositoryId: '1036246172'
repository:
  archived: false
  defaultBranch: master
  stars: 2121
  forks: 157
  lastCommit: '2026-10-07T16:02:09Z'
latestRelease:
  tag: 2.8.2
  name: 'ARMSX2 2.8.2 '
  publishedAt: '2026-10-07T00:57:22Z'
  url: 'https://github.com/ARMSX2/ARMSX2/releases/tag/2.8.2'
activity:
  lastSynchronized: '2026-10-07T16:27:41.124Z'
automation:
  sync: true
  github:
    repoEtag: W/"301f3d2030c2baa7b7068542273c77e7a6c5a22782dda78fc73c1677b29928b4"
    releasesEtag: W/"7b085f5676523bfedf04b05695b54bb1ce4a56dc9ba53c89c43588cf13d4356c"
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
  forkOf: PCSX2/pcsx2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
