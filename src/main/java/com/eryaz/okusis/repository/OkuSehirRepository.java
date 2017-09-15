package com.eryaz.okusis.repository;

import com.eryaz.okusis.domain.OkuSehir;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the OkuSehir entity.
 */
@SuppressWarnings("unused")
@Repository
public interface OkuSehirRepository extends JpaRepository<OkuSehir, Long> {

}
