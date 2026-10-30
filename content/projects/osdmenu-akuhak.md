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
  forks: 1
  lastCommit: '2025-06-14T14:51:04Z'
latestRelease:
  tag: nightly
  name: Nightly build
  publishedAt: '2025-06-14T14:51:05Z'
  url: 'https://github.com/AKuHAK/OSDMenu/releases/tag/nightly'
activity:
  lastSynchronized: '2026-10-30T14:10:03.929Z'
automation:
  sync: true
  github:
    repoEtag: W/"4436b9b6bef0341d2e7f7c70d70cddc77ed4e55d7ae4efaf853385f9d6d8be8e"
    releasesEtag: W/"a0c9bda265730607b024279c147e88585d5852a02cfb528ca8c66a8fe387e050"
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
