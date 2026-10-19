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
  lastSynchronized: '2026-10-19T14:41:57.464Z'
automation:
  sync: true
  github:
    repoEtag: W/"813ceb0a869f34e6b1f59c769b720b1f5a04cdb36e7088388d057cff44fc3bbd"
    releasesEtag: W/"87b1b63c4c5e6844178b6deeb30b9e619568b59b61aae4cd8c64492d8de7d3c3"
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
