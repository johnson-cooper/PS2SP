---
name: decompdecomp
slug: decompdecomp-bluesfire
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
  repository: Bluesfire/decompdecomp
  repositoryId: '1433372268'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-25T16:28:49Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-07T10:09:50.504Z'
automation:
  sync: true
  github:
    repoEtag: W/"b0372fb44d5e82588ad33ffee35a065a9c9b829b96c0d077fd56c5922d1226ef"
    releasesEtag: '"f5ca988cf8edc1105f5ebfd72d6c0a5ca9b98f69b067126d9a43407dc35f9f78"'
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
