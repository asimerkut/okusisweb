package com.eryaz.okusis.service.impl;

import com.eryaz.okusis.service.OkuSoforService;
import com.eryaz.okusis.domain.OkuSofor;
import com.eryaz.okusis.repository.OkuSoforRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Service Implementation for managing OkuSofor.
 */
@Service
@Transactional
public class OkuSoforServiceImpl implements OkuSoforService{

    private final Logger log = LoggerFactory.getLogger(OkuSoforServiceImpl.class);

    private final OkuSoforRepository okuSoforRepository;
    public OkuSoforServiceImpl(OkuSoforRepository okuSoforRepository) {
        this.okuSoforRepository = okuSoforRepository;
    }

    /**
     * Save a okuSofor.
     *
     * @param okuSofor the entity to save
     * @return the persisted entity
     */
    @Override
    public OkuSofor save(OkuSofor okuSofor) {
        log.debug("Request to save OkuSofor : {}", okuSofor);
        return okuSoforRepository.save(okuSofor);
    }

    /**
     *  Get all the okuSofors.
     *
     *  @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public List<OkuSofor> findAll() {
        log.debug("Request to get all OkuSofors");
        return okuSoforRepository.findAll();
    }

    /**
     *  Get one okuSofor by id.
     *
     *  @param id the id of the entity
     *  @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public OkuSofor findOne(Long id) {
        log.debug("Request to get OkuSofor : {}", id);
        return okuSoforRepository.findOne(id);
    }

    /**
     *  Delete the  okuSofor by id.
     *
     *  @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete OkuSofor : {}", id);
        okuSoforRepository.delete(id);
    }
}
