---
name: nfshp2-macos
slug: nfshp2-macos-solid7s
summary: >-
  Unofficial macOS port of the PS2 Need for Speed: Hot Pursuit 2 static
  recompilation. Intel v1.0; bring your own game files.
categories:
  - ports
tags:
  - auto-discovered
  - pending-promoted
  - released-active
  - fork
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: Solid7s/nfshp2-macos
  repositoryId: '1457766637'
repository:
  archived: false
  defaultBranch: main
  stars: 5
  forks: 0
  lastCommit: '2026-11-14T14:09:52Z'
latestRelease:
  tag: v1.0
  name: v1.0 — macOS (Intel)
  publishedAt: '2026-11-14T13:12:18Z'
  url: 'https://github.com/Solid7s/nfshp2-macos/releases/tag/v1.0'
activity:
  lastSynchronized: '2026-11-22T19:41:24.620Z'
automation:
  sync: true
  github:
    repoEtag: W/"fc052d1715388a174f215cb506d26bdc0fa23fd563f9b14f14b811f64b4f448a"
    releasesEtag: W/"66abb429fc05c1702c21f62e809a39246e4db1cff05d66d925e70b2aa817983d"
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ZloiKILLER/nfshp2-port-win'
  maturity: released-active
verified: false
featured: false
hidden: false
relationships:
  forkOf: ZloiKILLER/nfshp2-port-win
  source: ZloiKILLER/nfshp2-port-win
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
