---
name: libsmb2
slug: libsmb2-dborth
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
  repository: dborth/libsmb2
  repositoryId: '1366788084'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 1
  lastCommit: '2026-10-19T15:34:07Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-24T14:33:56.191Z'
automation:
  sync: true
  github:
    repoEtag: W/"491feb0d491f2fc5d586ad61c0d78d9f79eb9ca5c9b135513d25c4847592975a"
    releasesEtag: '"94fbc3dfdcacf1e254cfcd39aeb7e8fce35a0ed1d132095cc974e5c6a70b4c5e"'
discovery:
  method: 'fork-network:sahlberg/libsmb2'
  confidence: 100
  evidence:
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: sahlberg/libsmb2'
  maturity: active-unreleased
verified: false
featured: false
relationships:
  forkOf: sahlberg/libsmb2
  source: sahlberg/libsmb2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
