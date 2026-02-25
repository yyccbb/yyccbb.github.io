# SoC Compute Cluster Remote Development Guide

This guide explains how to use VS Code SFTP for file synchronization and debugpy for remote debugging on the National University of Singapore (NUS) SoC Compute Cluster. 

This lightweight workflow provides a resource-efficient alternative to the VS Code Remote Development extension by avoiding the large number of background processes and threads it creates, which often exceed the **process/thread limits** enforced on the SoC Compute Cluster.

## Navigation

- [SFTP Setup](./sftp.md)
- [Debugpy Remote Debugging](./debugpy.md)
