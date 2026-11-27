---
name: ARMSX2
slug: armsx2-rote66
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
  repository: rote66/ARMSX2_IOS14
  repositoryId: '1420411198'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-10-16T09:38:36Z'
latestRelease:
  tag: 2.6.0
  name: test ipa
  publishedAt: '2026-10-16T09:38:36Z'
  url: 'https://github.com/rote66/ARMSX2_IOS14/releases/tag/2.6.0'
activity:
  lastSynchronized: '2026-11-27T18:59:52.144Z'
automation:
  sync: true
  github:
    repoEtag: W/"209f990ddce7786840813ecb9491cc3b932d137eeadfeb191c7b3acbfd220d43"
    releasesEtag: W/"6d33e542796206b4ae1b65a54ed81c5649b4fbda9236c6a25bc5bc22023ca3c9"
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
