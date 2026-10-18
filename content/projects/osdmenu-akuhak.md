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
  lastSynchronized: '2026-10-18T14:35:34.845Z'
automation:
  sync: true
  github:
    repoEtag: W/"8e4b8c5a3921773e202e99f7feca11c58f9ff96d216441b89a75ddaefe8a8f10"
    releasesEtag: W/"1a1e6c7a6e25ece3f0e1d1c0cacc0c49eb549111a03fd7d4c401b5d49ed830e1"
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
