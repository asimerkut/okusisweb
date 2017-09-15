package com.eryaz.okusis.repository;

import com.eryaz.okusis.domain.OkuSofor;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the OkuSofor entity.
 */
@SuppressWarnings("unused")
@Repository
public interface OkuSoforRepository extends JpaRepository<OkuSofor, Long> {

}
