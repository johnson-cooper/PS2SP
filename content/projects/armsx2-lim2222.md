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
  lastSynchronized: '2026-11-26T23:53:51.120Z'
automation:
  sync: true
  github:
    repoEtag: W/"41a6ce2711fac83f0a751e608d9440189efd113e7ee7204779c5991c6632e5fb"
    releasesEtag: W/"51b8a29b5daae0e62b9b6ad34a7fd8413bc71c995888a43ba9e6a5e6531db3c3"
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
