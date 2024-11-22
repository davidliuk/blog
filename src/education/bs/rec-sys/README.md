# Recommendation System 

推荐系统

- 经典算法

  - User-based
  - Item-based
  - Context-based

    - Social rec

      TrustSVD

- 深度学习

## 算法库

Librec 使用

```sh
librec rec -exec -conf ../core/src/main/resources/rec/context/rating/trustsvd-test.properties

mvn install:install-file -Dfile=librec-core-3.0.0.jar -DgroupId=net.librec -DartifactId=librec-core -Dversion=3.1.0 -Dpackaging=jar
```

