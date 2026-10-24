---
name: OSDMenu
slug: osdmenu-akuhak
summary: Patches for OSDSYS and HDD OSD (Browser 2.0) based on Free McBoot 1.8.
categories:
  - dashboards
  - launchers
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: AKuHAK/OSDMenu
  repositoryId: '998013809'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2025-06-14T14:51:04Z'
latestRelease:
  tag: nightly
  name: Nightly build
  publishedAt: '2025-06-14T14:51:05Z'
  url: 'https://github.com/AKuHAK/OSDMenu/releases/tag/nightly'
activity:
  lastSynchronized: '2026-10-24T14:34:24.085Z'
automation:
  sync: true
  github:
    repoEtag: W/"b70c934406fa9413997601d31945bea2ca76fa9606cf115ceb32e29536410e7e"
    releasesEtag: W/"0c82cb992a14c5c2c83a1aaf8cea41b9d271cf8e3cb8171c3d8bab630d921cc1"
discovery:
  method: 'fork-network:pcm720/OSDMenu'
  confidence: 100
  evidence:
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: pcm720/OSDMenu'
  maturity: prerelease-only
verified: false
featured: false
relationships:
  forkOf: pcm720/OSDMenu
  source: pcm720/OSDMenu
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
