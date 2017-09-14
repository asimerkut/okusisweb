package com.eryaz.okusis.repository;

import com.eryaz.okusis.domain.OkuArac;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the OkuArac entity.
 */
@SuppressWarnings("unused")
@Repository
public interface OkuAracRepository extends JpaRepository<OkuArac, Long> {

}
