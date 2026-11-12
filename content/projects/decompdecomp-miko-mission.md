---
name: decompdecomp
slug: decompdecomp-miko-mission
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
  repository: miko-mission/decompdecomp
  repositoryId: '1442298350'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-11-12T10:45:15Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-12T11:10:17.446Z'
automation:
  sync: true
  github:
    repoEtag: W/"5507acc379563dcbc2ee193d0380a317b9f1910484de9af1eaa8e991e9759bc9"
    releasesEtag: '"952f0fb61c43dbe65d3e0d2cad8f06412f7e64d77f20ebb492a0c852b79b9381"'
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
