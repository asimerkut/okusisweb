package com.eryaz.okusis.repository;

import com.eryaz.okusis.domain.OkuOkul;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the OkuOkul entity.
 */
@SuppressWarnings("unused")
@Repository
public interface OkuOkulRepository extends JpaRepository<OkuOkul, Long> {

}
