---
name: libsmb2
slug: libsmb2-netapplabs
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
  repository: NetAppLabs/libsmb2
  repositoryId: '889895090'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 2
  lastCommit: '2026-04-01T05:27:51Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-25T19:38:05.837Z'
automation:
  sync: true
  github:
    repoEtag: W/"6f6b8bb54324af8c39bd5680fa8178b15a71648a59f7e4e5413941a8e4b96e35"
    releasesEtag: '"17828022ef91e6b899139ea659c43195f157e5fe9fda163fe4cfd658085b1033"'
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
