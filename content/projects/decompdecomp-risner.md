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
  lastCommit: '2026-10-28T22:28:37Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-29T00:57:21.881Z'
automation:
  sync: true
  github:
    repoEtag: W/"a4e684fd56d4a63d78c69f48a57100e71db780f59f735e477eacdd3c73c2050d"
    releasesEtag: '"ed883635daf9e1a915725ab8be081a3ea70614a4faeaca680146a5aa9133984d"'
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
