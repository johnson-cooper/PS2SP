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
  stars: 3
  forks: 1
  lastCommit: '2026-10-29T21:38:17Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-30T07:06:56.773Z'
automation:
  sync: true
  github:
    repoEtag: W/"bb99b553a74d62af44e67e592c198025a233c1eaf6b902b814d6ffd472b743c0"
    releasesEtag: '"93e3f34a5d35d00255924ba0a03af83e60bd3648a7f532bcf2317bb9d0e54b8c"'
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
