---
name: libsmb2
slug: libsmb2-icharleshu
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
  repository: iCharlesHu/libsmb2
  repositoryId: '1316856428'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-08-01T00:27:17Z'
latestRelease:
  tag: '2026.7'
  name: SMB2 2026.7
  publishedAt: '2026-08-01T00:27:17Z'
  url: 'https://github.com/iCharlesHu/libsmb2/releases/tag/2026.7'
activity:
  lastSynchronized: '2026-11-23T21:26:02.495Z'
automation:
  sync: true
  github:
    repoEtag: W/"41ab6e59518b26f93394386f79af4740ff621a828203421fb850e308cfa83078"
    releasesEtag: W/"b47d044a0e5061318c293f8b0cf88dcecd1618e0e083dd15fbeffaa941bb9bf1"
discovery:
  method: 'fork-network:sahlberg/libsmb2'
  confidence: 100
  evidence:
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: sahlberg/libsmb2'
  maturity: released-active
verified: false
featured: false
relationships:
  forkOf: sahlberg/libsmb2
  source: sahlberg/libsmb2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
