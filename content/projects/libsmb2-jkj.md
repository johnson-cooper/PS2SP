---
name: libsmb2
slug: libsmb2-jkj
summary: SMB2/3 userspace client
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
  repository: jkj/libsmb2
  repositoryId: '1417552195'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-10-13T17:12:16Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-13T19:32:43.126Z'
automation:
  sync: true
discovery:
  method: 'incremental:ps2sdk in:name,description,readme'
  confidence: 100
  evidence:
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: sahlberg/libsmb2'
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: sahlberg/libsmb2
  source: sahlberg/libsmb2
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
