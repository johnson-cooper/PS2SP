---
name: LUNA
slug: luna-warksmith
summary: 'LUNA is a modern visual game launcher for the PlayStation 2, built on NHDDL. '
categories:
  - loaders
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: Warksmith/LUNA
  repositoryId: '1437788729'
repository:
  archived: false
  defaultBranch: integration
  stars: 0
  forks: 0
  lastCommit: '2026-11-12T19:09:09Z'
latestRelease:
  tag: v0.1
  name: v0.1 Experimentation with GameID IGR and UDPFS
  publishedAt: '2026-11-01T01:01:07Z'
  url: 'https://github.com/Warksmith/LUNA/releases/tag/v0.1'
activity:
  lastSynchronized: '2026-11-17T13:27:22.163Z'
automation:
  sync: true
  github:
    repoEtag: W/"6067aa866c9ed3c01b5c3e777f1ef3f760a5f20f9b548a5cc8d214c09a9dff51"
    releasesEtag: W/"fd2e3a2483210dd6933aa596d9f9f74ae184e8d1f511c34f28e521f59b3057b4"
discovery:
  method: 'incremental:"PS2 homebrew" in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - README identifies PS2 homebrew
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: dnunezx/LUNA'
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: dnunezx/LUNA
  source: dnunezx/LUNA
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
