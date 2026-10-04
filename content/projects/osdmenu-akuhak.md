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
  lastSynchronized: '2026-10-01T15:00:56.456Z'
automation:
  sync: true
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
