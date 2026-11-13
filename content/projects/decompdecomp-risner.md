---
name: decompdecomp
slug: decompdecomp-risner
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
  repository: risner/decompdecomp
  repositoryId: '1434268247'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-11-12T23:52:15Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-13T00:24:28.080Z'
automation:
  sync: true
  github:
    repoEtag: W/"a3b37e143dffc9c938de028e2253fcf6ebd405a611e36245c81b373ebb5bb31d"
    releasesEtag: '"98b39eaf82b5aff313393cd803aefa154c085e8109a70fb42a843a28b7b06d93"'
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
