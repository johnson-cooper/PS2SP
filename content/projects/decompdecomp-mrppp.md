---
name: decompdecomp
slug: decompdecomp-mrppp
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
  repository: mrppp/decompdecomp
  repositoryId: '1462606730'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-11-18T11:38:46Z'
latestRelease:
  tag: v1.0.9-rr.2-mrppp.1
  name: decompdecomp 1.0.9-rr.2 (mrppp fork)
  publishedAt: '2026-11-18T10:03:43Z'
  url: 'https://github.com/mrppp/decompdecomp/releases/tag/v1.0.9-rr.2-mrppp.1'
activity:
  lastSynchronized: '2026-11-18T13:27:32.696Z'
automation:
  sync: true
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 100
  evidence:
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: i12bp8/decomp.wtf'
  maturity: released-active
verified: false
featured: false
hidden: false
relationships:
  forkOf: RetroReversing/decompdecomp
  source: i12bp8/decomp.wtf
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
