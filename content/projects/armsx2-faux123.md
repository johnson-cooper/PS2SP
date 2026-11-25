---
name: ARMSX2
slug: armsx2-faux123
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
  repository: faux123/ARMSX2
  repositoryId: '1457988100'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 0
  lastCommit: '2026-11-14T21:48:53Z'
latestRelease:
  tag: panvk-roaa-test1
  name: PanVK ROAA auto-detect test 1
  publishedAt: '2026-11-14T21:49:07Z'
  url: 'https://github.com/faux123/ARMSX2/releases/tag/panvk-roaa-test1'
activity:
  lastSynchronized: '2026-11-25T22:32:47.926Z'
automation:
  sync: true
  github:
    repoEtag: W/"3743f4f1f5c1ca04214365dceae48c865e4a7c909e8edf50960f46fabca32b2b"
    releasesEtag: W/"c46e3d8f236b5a7ed688fecc755404098f7cc678fd5ac589f0b0d254f25707e5"
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: PCSX2/pcsx2'
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: ARMSX2/ARMSX2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
