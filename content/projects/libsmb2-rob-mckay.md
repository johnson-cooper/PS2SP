---
name: libsmb2
slug: libsmb2-rob-mckay
summary: >-
  Userspace SMB2/SMB3 client library ported to PlayStation 2 for connecting to
  modern network shares in homebrew loaders.
categories:
  - libraries
  - networking
tags:
  - auto-discovered
  - pending-promoted
  - active-unreleased
  - fork
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: Rob-McKay/libsmb2
  repositoryId: '638813581'
repository:
  archived: false
  defaultBranch: riscos
  stars: 1
  forks: 0
  lastCommit: '2025-12-05T19:09:38Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-21T10:09:30.960Z'
automation:
  sync: true
  github:
    repoEtag: W/"b9937e59750ce30ee2f8f85027d413bd07288cf10a021bdacfb2338a8131063e"
    releasesEtag: '"b55065ab4085e8f1e8b79031a62d1bdda93dcc0a493b526b40fcf89d27888f60"'
discovery:
  method: 'fork-network:sahlberg/libsmb2'
  confidence: 95
  evidence:
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: sahlberg/libsmb2'
  maturity: dormant-unreleased
verified: false
featured: false
relationships:
  forkOf: sahlberg/libsmb2
  source: sahlberg/libsmb2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
