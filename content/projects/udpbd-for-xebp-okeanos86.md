---
name: UDPBD-for-XEBP
slug: udpbd-for-xebp-okeanos86
summary: >-
  This is a plugin for the Xtreme Elite Boot Plus dashboard for the PlayStation
  2.
categories:
  - dashboards
  - networking
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: null
source:
  provider: github
  repository: Okeanos86/UDPBD-for-XEBP
  repositoryId: '1450515936'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-11-08T19:08:28Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-13T00:26:26.845Z'
automation:
  sync: true
  github:
    repoEtag: W/"c0666cdea7bff9d60a701c8ac5d258fa3c4edc29bfa5856a8c035ada623c5944"
    releasesEtag: '"98b39eaf82b5aff313393cd803aefa154c085e8109a70fb42a843a28b7b06d93"'
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - GitHub fork of another repository
    - >-
      fork lineage traces to indexed PS2 project:
      sync-on-luma/xebplus-neutrino-loader-plugin
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: MegaBitmap/UDPBD-for-XEBP
  source: sync-on-luma/xebplus-neutrino-loader-plugin
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
