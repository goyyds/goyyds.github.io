---
title: k3s_文件编排
lang: zh-CN
date: 2021-06-30 09:13:16
tags: [k3s,k8s,集群]
categories: [技术篇,服务器]
thumbnail: https://www.goyyds.com/img/s/k3s_cluster.png
cover: https://www.goyyds.com/img/s/k3s_cluster.png
toc: true
excerpt: keep hungry, keep foolish
---

# 1. k8s resource 支持的类型
```shell script
kubectl api-resources
# 结果

NAME                                       SHORTNAMES   APIVERSION                             NAMESPACED   KIND
bindings                                                v1                                     true         Binding
componentstatuses                          cs           v1                                     false        ComponentStatus
configmaps                                 cm           v1                                     true         ConfigMap
endpoints                                  ep           v1                                     true         Endpoints
events                                     ev           v1                                     true         Event
limitranges                                limits       v1                                     true         LimitRange
namespaces                                 ns           v1                                     false        Namespace
nodes                                      no           v1                                     false        Node
persistentvolumeclaims                     pvc          v1                                     true         PersistentVolumeClaim
persistentvolumes                          pv           v1                                     false        PersistentVolume
pods                                       po           v1                                     true         Pod
podtemplates                                            v1                                     true         PodTemplate
replicationcontrollers                     rc           v1                                     true         ReplicationController
resourcequotas                             quota        v1                                     true         ResourceQuota
secrets                                                 v1                                     true         Secret
serviceaccounts                            sa           v1                                     true         ServiceAccount
services                                   svc          v1                                     true         Service
challenges                                              acme.cert-manager.io/v1                true         Challenge
orders                                                  acme.cert-manager.io/v1                true         Order
mutatingwebhookconfigurations                           admissionregistration.k8s.io/v1        false        MutatingWebhookConfiguration
validatingwebhookconfigurations                         admissionregistration.k8s.io/v1        false        ValidatingWebhookConfiguration
customresourcedefinitions                  crd,crds     apiextensions.k8s.io/v1                false        CustomResourceDefinition
apiservices                                             apiregistration.k8s.io/v1              false        APIService
controllerrevisions                                     apps/v1                                true         ControllerRevision
daemonsets                                 ds           apps/v1                                true         DaemonSet
deployments                                deploy       apps/v1                                true         Deployment
replicasets                                rs           apps/v1                                true         ReplicaSet
statefulsets                               sts          apps/v1                                true         StatefulSet
tokenreviews                                            authentication.k8s.io/v1               false        TokenReview
localsubjectaccessreviews                               authorization.k8s.io/v1                true         LocalSubjectAccessReview
selfsubjectaccessreviews                                authorization.k8s.io/v1                false        SelfSubjectAccessReview
selfsubjectrulesreviews                                 authorization.k8s.io/v1                false        SelfSubjectRulesReview
subjectaccessreviews                                    authorization.k8s.io/v1                false        SubjectAccessReview
horizontalpodautoscalers                   hpa          autoscaling/v1                         true         HorizontalPodAutoscaler
cronjobs                                   cj           batch/v1                               true         CronJob
jobs                                                    batch/v1                               true         Job
apps                                                    catalog.cattle.io/v1                   true         App
clusterrepos                                            catalog.cattle.io/v1                   false        ClusterRepo
operations                                              catalog.cattle.io/v1                   true         Operation
certificaterequests                        cr,crs       cert-manager.io/v1                     true         CertificateRequest
certificates                               cert,certs   cert-manager.io/v1                     true         Certificate
clusterissuers                                          cert-manager.io/v1                     false        ClusterIssuer
issuers                                                 cert-manager.io/v1                     true         Issuer
certificatesigningrequests                 csr          certificates.k8s.io/v1                 false        CertificateSigningRequest
leases                                                  coordination.k8s.io/v1                 true         Lease
endpointslices                                          discovery.k8s.io/v1                    true         EndpointSlice
events                                     ev           events.k8s.io/v1                       true         Event
ingresses                                  ing          extensions/v1beta1                     true         Ingress
bundledeployments                                       fleet.cattle.io/v1alpha1               true         BundleDeployment
bundlenamespacemappings                                 fleet.cattle.io/v1alpha1               true         BundleNamespaceMapping
bundles                                                 fleet.cattle.io/v1alpha1               true         Bundle
clustergroups                                           fleet.cattle.io/v1alpha1               true         ClusterGroup
clusterregistrations                                    fleet.cattle.io/v1alpha1               true         ClusterRegistration
clusterregistrationtokens                               fleet.cattle.io/v1alpha1               true         ClusterRegistrationToken
clusters                                                fleet.cattle.io/v1alpha1               true         Cluster
contents                                                fleet.cattle.io/v1alpha1               false        Content
gitreporestrictions                                     fleet.cattle.io/v1alpha1               true         GitRepoRestriction
gitrepos                                                fleet.cattle.io/v1alpha1               true         GitRepo
flowschemas                                             flowcontrol.apiserver.k8s.io/v1beta1   false        FlowSchema
prioritylevelconfigurations                             flowcontrol.apiserver.k8s.io/v1beta1   false        PriorityLevelConfiguration
gitjobs                                                 gitjob.cattle.io/v1                    true         GitJob
helmchartconfigs                                        helm.cattle.io/v1                      true         HelmChartConfig
helmcharts                                              helm.cattle.io/v1                      true         HelmChart
addons                                                  k3s.cattle.io/v1                       true         Addon
authconfigs                                             management.cattle.io/v3                false        AuthConfig
catalogs                                                management.cattle.io/v3                false        Catalog
catalogtemplates                                        management.cattle.io/v3                true         CatalogTemplate
catalogtemplateversions                                 management.cattle.io/v3                true         CatalogTemplateVersion
cisbenchmarkversions                                    management.cattle.io/v3                true         CisBenchmarkVersion
cisconfigs                                              management.cattle.io/v3                true         CisConfig
clusteralertgroups                                      management.cattle.io/v3                true         ClusterAlertGroup
clusteralertrules                                       management.cattle.io/v3                true         ClusterAlertRule
clusteralerts                                           management.cattle.io/v3                true         ClusterAlert
clustercatalogs                                         management.cattle.io/v3                true         ClusterCatalog
clusterloggings                                         management.cattle.io/v3                true         ClusterLogging
clustermonitorgraphs                                    management.cattle.io/v3                true         ClusterMonitorGraph
clusterregistrationtokens                               management.cattle.io/v3                true         ClusterRegistrationToken
clusterroletemplatebindings                             management.cattle.io/v3                true         ClusterRoleTemplateBinding
clusters                                                management.cattle.io/v3                false        Cluster
clusterscans                                            management.cattle.io/v3                true         ClusterScan
clustertemplaterevisions                                management.cattle.io/v3                true         ClusterTemplateRevision
clustertemplates                                        management.cattle.io/v3                true         ClusterTemplate
composeconfigs                                          management.cattle.io/v3                false        ComposeConfig
dynamicschemas                                          management.cattle.io/v3                false        DynamicSchema
etcdbackups                                             management.cattle.io/v3                true         EtcdBackup
features                                                management.cattle.io/v3                false        Feature
fleetworkspaces                                         management.cattle.io/v3                false        FleetWorkspace
globaldnses                                             management.cattle.io/v3                true         GlobalDns
globaldnsproviders                                      management.cattle.io/v3                true         GlobalDnsProvider
globalrolebindings                                      management.cattle.io/v3                false        GlobalRoleBinding
globalroles                                             management.cattle.io/v3                false        GlobalRole
groupmembers                                            management.cattle.io/v3                false        GroupMember
groups                                                  management.cattle.io/v3                false        Group
kontainerdrivers                                        management.cattle.io/v3                false        KontainerDriver
monitormetrics                                          management.cattle.io/v3                true         MonitorMetric
multiclusterapprevisions                                management.cattle.io/v3                true         MultiClusterAppRevision
multiclusterapps                                        management.cattle.io/v3                true         MultiClusterApp
nodedrivers                                             management.cattle.io/v3                false        NodeDriver
nodepools                                               management.cattle.io/v3                true         NodePool
nodes                                                   management.cattle.io/v3                true         Node
nodetemplates                                           management.cattle.io/v3                true         NodeTemplate
notifiers                                               management.cattle.io/v3                true         Notifier
podsecuritypolicytemplateprojectbindings                management.cattle.io/v3                true         PodSecurityPolicyTemplateProjectBinding
podsecuritypolicytemplates                              management.cattle.io/v3                false        PodSecurityPolicyTemplate
preferences                                             management.cattle.io/v3                true         Preference
projectalertgroups                                      management.cattle.io/v3                true         ProjectAlertGroup
projectalertrules                                       management.cattle.io/v3                true         ProjectAlertRule
projectalerts                                           management.cattle.io/v3                true         ProjectAlert
projectcatalogs                                         management.cattle.io/v3                true         ProjectCatalog
projectloggings                                         management.cattle.io/v3                true         ProjectLogging
projectmonitorgraphs                                    management.cattle.io/v3                true         ProjectMonitorGraph
projectnetworkpolicies                                  management.cattle.io/v3                true         ProjectNetworkPolicy
projectroletemplatebindings                             management.cattle.io/v3                true         ProjectRoleTemplateBinding
projects                                                management.cattle.io/v3                true         Project
rkeaddons                                               management.cattle.io/v3                true         RkeAddon
rkek8sserviceoptions                                    management.cattle.io/v3                true         RkeK8sServiceOption
rkek8ssystemimages                                      management.cattle.io/v3                true         RkeK8sSystemImage
roletemplates                                           management.cattle.io/v3                false        RoleTemplate
samltokens                                              management.cattle.io/v3                true         SamlToken
settings                                                management.cattle.io/v3                false        Setting
templatecontents                                        management.cattle.io/v3                false        TemplateContent
templates                                               management.cattle.io/v3                false        Template
templateversions                                        management.cattle.io/v3                false        TemplateVersion
tokens                                                  management.cattle.io/v3                false        Token
userattributes                                          management.cattle.io/v3                false        UserAttribute
users                                                   management.cattle.io/v3                false        User
nodes                                                   metrics.k8s.io/v1beta1                 false        NodeMetrics
pods                                                    metrics.k8s.io/v1beta1                 true         PodMetrics
alertmanagers                                           monitoring.coreos.com/v1               true         Alertmanager
prometheuses                                            monitoring.coreos.com/v1               true         Prometheus
prometheusrules                                         monitoring.coreos.com/v1               true         PrometheusRule
servicemonitors                                         monitoring.coreos.com/v1               true         ServiceMonitor
ingressclasses                                          networking.k8s.io/v1                   false        IngressClass
ingresses                                  ing          networking.k8s.io/v1                   true         Ingress
networkpolicies                            netpol       networking.k8s.io/v1                   true         NetworkPolicy
runtimeclasses                                          node.k8s.io/v1                         false        RuntimeClass
poddisruptionbudgets                       pdb          policy/v1                              true         PodDisruptionBudget
podsecuritypolicies                        psp          policy/v1beta1                         false        PodSecurityPolicy
apprevisions                                            project.cattle.io/v3                   true         AppRevision
apps                                                    project.cattle.io/v3                   true         App
pipelineexecutions                                      project.cattle.io/v3                   true         PipelineExecution
pipelines                                               project.cattle.io/v3                   true         Pipeline
pipelinesettings                                        project.cattle.io/v3                   true         PipelineSetting
sourcecodecredentials                                   project.cattle.io/v3                   true         SourceCodeCredential
sourcecodeproviderconfigs                               project.cattle.io/v3                   true         SourceCodeProviderConfig
sourcecoderepositories                                  project.cattle.io/v3                   true         SourceCodeRepository
clusters                                                rancher.cattle.io/v1                   true         Cluster
projects                                                rancher.cattle.io/v1                   true         Project
roletemplatebindings                                    rancher.cattle.io/v1                   true         RoleTemplateBinding
roletemplates                                           rancher.cattle.io/v1                   false        RoleTemplate
clusterrolebindings                                     rbac.authorization.k8s.io/v1           false        ClusterRoleBinding
clusterroles                                            rbac.authorization.k8s.io/v1           false        ClusterRole
rolebindings                                            rbac.authorization.k8s.io/v1           true         RoleBinding
roles                                                   rbac.authorization.k8s.io/v1           true         Role
priorityclasses                            pc           scheduling.k8s.io/v1                   false        PriorityClass
csidrivers                                              storage.k8s.io/v1                      false        CSIDriver
csinodes                                                storage.k8s.io/v1                      false        CSINode
csistoragecapacities                                    storage.k8s.io/v1beta1                 true         CSIStorageCapacity
storageclasses                             sc           storage.k8s.io/v1                      false        StorageClass
volumeattachments                                       storage.k8s.io/v1                      false        VolumeAttachment
ingressroutes                                           traefik.containo.us/v1alpha1           true         IngressRoute
ingressroutetcps                                        traefik.containo.us/v1alpha1           true         IngressRouteTCP
ingressrouteudps                                        traefik.containo.us/v1alpha1           true         IngressRouteUDP
middlewares                                             traefik.containo.us/v1alpha1           true         Middleware
serverstransports                                       traefik.containo.us/v1alpha1           true         ServersTransport
tlsoptions                                              traefik.containo.us/v1alpha1           true         TLSOption
tlsstores                                               traefik.containo.us/v1alpha1           true         TLSStore
traefikservices                                         traefik.containo.us/v1alpha1           true         TraefikService

```

# 2 api-versions
```shell script
kubectl api-versions

#结果
acme.cert-manager.io/v1
acme.cert-manager.io/v1alpha2
acme.cert-manager.io/v1alpha3
acme.cert-manager.io/v1beta1
admissionregistration.k8s.io/v1
admissionregistration.k8s.io/v1beta1
apiextensions.k8s.io/v1
apiextensions.k8s.io/v1beta1
apiregistration.k8s.io/v1
apiregistration.k8s.io/v1beta1
apps/v1
authentication.k8s.io/v1
authentication.k8s.io/v1beta1
authorization.k8s.io/v1
authorization.k8s.io/v1beta1
autoscaling/v1
autoscaling/v2beta1
autoscaling/v2beta2
batch/v1
batch/v1beta1
catalog.cattle.io/v1
cert-manager.io/v1
cert-manager.io/v1alpha2
cert-manager.io/v1alpha3
cert-manager.io/v1beta1
certificates.k8s.io/v1
certificates.k8s.io/v1beta1
coordination.k8s.io/v1
coordination.k8s.io/v1beta1
discovery.k8s.io/v1
discovery.k8s.io/v1beta1
events.k8s.io/v1
events.k8s.io/v1beta1
extensions/v1beta1
fleet.cattle.io/v1alpha1
flowcontrol.apiserver.k8s.io/v1beta1
gitjob.cattle.io/v1
helm.cattle.io/v1
k3s.cattle.io/v1
management.cattle.io/v3
metrics.k8s.io/v1beta1
monitoring.coreos.com/v1
networking.k8s.io/v1
networking.k8s.io/v1beta1
node.k8s.io/v1
node.k8s.io/v1beta1
policy/v1
policy/v1beta1
project.cattle.io/v3
rancher.cattle.io/v1
rbac.authorization.k8s.io/v1
rbac.authorization.k8s.io/v1beta1
scheduling.k8s.io/v1
scheduling.k8s.io/v1beta1
storage.k8s.io/v1
storage.k8s.io/v1beta1
traefik.containo.us/v1alpha1
v1

```
