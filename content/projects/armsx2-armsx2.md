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
  stars: 2438
  forks: 226
  lastCommit: '2026-11-08T19:18:53Z'
latestRelease:
  tag: 2.9.2
  name: 'ARMSX2 2.9.2 '
  publishedAt: '2026-11-06T18:59:52Z'
  url: 'https://github.com/ARMSX2/ARMSX2/releases/tag/2.9.2'
activity:
  lastSynchronized: '2026-11-08T19:42:24.779Z'
automation:
  sync: true
  github:
    repoEtag: W/"51a74a41084157f53bac231e160225b85f8a78a7c80b5e612746f3c3f65a27b0"
    releasesEtag: W/"8d02b86b9ebc2f9b16b32b80451ebd789c6bb96e901f81d86b7381a5bee8ff96"
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
