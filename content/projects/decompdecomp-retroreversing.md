---
name: decompdecomp
slug: decompdecomp-retroreversing
summary: >-
  A desktop app where AI agents decompile the games you own into C/C++ that
  rebuilds them byte for byte. 
categories:
  - preservation
  - development
tags:
  - auto-discovered
  - pending-promoted
  - historical-or-discontinued
  - fork
features: []
authors: []
license: AGPL-3.0
homepage: 'http://decomp.ndelic.com/'
source:
  provider: github
  repository: RetroReversing/decompdecomp
  repositoryId: '1431103937'
repository:
  archived: false
  defaultBranch: main
  stars: 7
  forks: 0
  lastCommit: '2026-11-13T01:27:18Z'
latestRelease:
  tag: v1.0.9-rr.2
  name: decompdecomp v1.0.9-rr.2 — RetroReversing fork
  publishedAt: '2026-11-08T17:10:55Z'
  url: 'https://github.com/RetroReversing/decompdecomp/releases/tag/v1.0.9-rr.2'
activity:
  lastSynchronized: '2026-11-13T07:58:16.517Z'
automation:
  sync: true
  github:
    repoEtag: W/"5a39971f9a25f786aa96c5f2d32d4e5d2613deb67097408150cbd6699174a468"
    releasesEtag: W/"9f2d2fca89f69f3786e65612bd4f650594d3a2454e1968fb3b4d1c1179717d9f"
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 100
  evidence:
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: i12bp8/decomp.wtf'
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: n-delic/decompdecomp
  source: i12bp8/decomp.wtf
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
